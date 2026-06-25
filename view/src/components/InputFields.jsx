import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const InputFields = () => {

  const { id } = useParams();
  const isEdit = Boolean(id);
 
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [type, setType] = useState("");

  //  data for  EDIT
useEffect(() => {
  if (!isEdit) return;

  const loadProduct = async () => {
    try {
      const res = await axios.get("/api/products");

      const product = res.data.find((p) => p._id === id);

      if (product) {
        setTitle(product.title);
        setDescription(product.description);
        setPrice(product.price);
        setType(product.type);
      }
    } catch (error) {
      console.error("Помилка завантаження:", error);
    }
  };

  loadProduct();
}, [id, isEdit]);

  //  SUBMIT (CREATE / UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("type", type);

    try {
      const token = localStorage.getItem("token");

      let response;

      if (isEdit) {
        response = await axios.put(`/api/products/${id}`, formData, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
      } else {
        response = await axios.post("/api/products/add", formData, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
      }

      console.log("SUCCESS:", response.data);

      //  redirect after succes
      navigate("/products");
    } catch (error) {
      console.error(
        "Помилка відправлення:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="inputContainer">
      <h2>{isEdit ? "Edit Product" : "Add Product"}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Заголовок</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Опис</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Ціна</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Картинка</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div>
          <label>Тип товару</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="">Оберіть тип</option>
            <option value="Belt">Belt</option>
            <option value="Sleep">Sleep</option>
            <option value="Bones">Bones</option>
          </select>
        </div>

        <button type="submit">
          {isEdit ? "Оновити" : "Створити"}
        </button>
      </form>
    </div>
  );
};

export default InputFields;