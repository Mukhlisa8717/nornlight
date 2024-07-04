import React from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { useCreateCategoryMutation } from "../../context/api/categoryApi";
import { toast } from "react-toastify"; 

const initialState = {
  name: "",
};

const CreateCategory = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);
  const [createCategory, { isLoading: isCreating }] =
    useCreateCategoryMutation();

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    try {
      await createCategory(formData).unwrap();
      toast.success("Категория успешно создана!"); 
      setFormData(initialState);
    } catch (error) {
      toast.error("Ошибка при создании категории!"); 
    }
  };

  return (
    <div className="create-product">
      <h2>Create Category</h2>
      <form onSubmit={handleCreateCategory}>
        <div className="create-product__item">
          <label htmlFor="name">Category Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
            autoComplete="off"
            required
          />
        </div>
        <button type="submit" disabled={isCreating}>
          {isCreating ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
