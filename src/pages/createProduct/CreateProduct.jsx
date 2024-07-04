import React from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import { useCreateProductMutation } from "../../context/api/productApi";
import { toast } from "react-toastify";
import "./CreateProduct.scss";

const initialState = {
  title: "",
  price: "",
  url: "",
  category: "",
  desc: "",
  oldPrice: "",
};

const CreateProduct = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  const { data: categories } = useGetCategoryQuery();
  const [createProduct, { isLoading: isCreating }] = useCreateProductMutation();

  const handleCreate = async (e) => {
    e.preventDefault();
    const newProduct = {
      ...formData,
      price: +formData.price,
      oldPrice: +formData.oldPrice,
      url: formData.url.split("\n").filter((i) => i.trim()),
    };

    try {
      await createProduct(newProduct).unwrap();
      toast.success("Продукт успешно создан!");
      setFormData(initialState);
    } catch (error) {
      toast.error("Ошибка при создании продукта!");
    }
  };

  let categoryItem = categories?.map((el) => (
    <option key={el.id} value={el.name}>
      {el.name}
    </option>
  ));

  return (
    <div className="create-product">
      <h2>Create Product</h2>
      <form onSubmit={handleCreate}>
        <div className="create-product__item">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={handleChange}
            name="title"
            required
          />
        </div>
        <div className="create-product__item">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            value={formData.price}
            onChange={handleChange}
            name="price"
            required
          />
        </div>
        <div className="create-product__item">
          <label htmlFor="oldPrice">Old price</label>
          <input
            type="number"
            value={formData.oldPrice}
            onChange={handleChange}
            name="oldPrice"
            required
          />
        </div>
        <div className="create-product__item">
          <label htmlFor="url">Image URLs</label>
          <textarea
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="create-product__item">
          <label htmlFor="category">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Tanlang</option>
            {categoryItem}
          </select>
        </div>
        <div className="create-product__item">
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            required
            rows={7}
          ></textarea>
        </div>
        <button type="submit" disabled={isCreating}>
          {isCreating ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
