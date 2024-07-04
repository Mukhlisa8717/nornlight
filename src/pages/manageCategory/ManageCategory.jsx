import React, { useState } from "react";
import "./ManageCategory.scss";
import {
  useGetCategoryQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "../../context/api/categoryApi";
import Model from "../../components/model/Model";
import { toast } from "react-toastify";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import { LuPencilLine } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";

const ManageCategory = () => {
  const { data: categories, isLoading, isError } = useGetCategoryQuery();
  const [deleteCategory, { isLoading: isDeleting }] =
    useDeleteCategoryMutation();
  const [updateCategory, { isLoading: isUpdating }] =
    useUpdateCategoryMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("");
  const { formData, handleChange, setFormData } = useGetInputValue({
    id: "",
    name: "",
  });

  const handleOpenModal = (mode, category) => {
    setModalMode(mode);
    if (category) {
      setFormData({ id: category.id, name: category.name });
    }
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      await deleteCategory(formData.id).unwrap();
      toast.success("Category successfully deleted!");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Failed to delete category.");
    }
  };

  const handleEdit = async () => {
    try {
      await updateCategory({
        id: formData.id,
        body: { name: formData.name },
      }).unwrap();
      toast.success("Category successfully updated!");
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Failed to update category.");
    }
  };

  if (isLoading) return <div>Loading categories...</div>;
  if (isError) return <div>Error loading categories</div>;

  return (
    <div className="manage-category">
      <h2>Manage category</h2>
      <ul className="manage-category__list">
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
            <div className="manage__btns">
              <button
                className="edit__btn"
                onClick={() => handleOpenModal("edit", category)}
              >
                <LuPencilLine size={18} className="edit__btn" />
              </button>
              <button
                className="delete__btn"
                onClick={() => handleOpenModal("delete", category)}
              >
                <RiDeleteBin6Line size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <Model close={() => setIsModalOpen(false)}>
          {modalMode === "delete" ? (
            <div className="manage__delete">
              <p>
                Are you sure you want to delete categories - {formData.name}?
              </p>
              <div className="manage__delete-btns">
                <button onClick={handleDelete} disabled={isDeleting}>
                  {isDeleting ? "Delete..." : "Yes"}
                </button>
                <button onClick={() => setIsModalOpen(false)}>No</button>
              </div>
            </div>
          ) : (
            <div className="manage__cont">
              <div className="manage-category__update">
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  placeholder="New category name"
                />
                <button onClick={handleEdit} disabled={isUpdating}>
                  {isUpdating ? "Update..." : "Update"}
                </button>
              </div>
              <button
                className="manage__cont-cancel"
                onClick={() => setIsModalOpen(false)}
              >
                <ImCancelCircle size={18} />
              </button>
            </div>
          )}
        </Model>
      )}
    </div>
  );
};

export default ManageCategory;
