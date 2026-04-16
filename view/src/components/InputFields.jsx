import React, { useState } from "react";
import axios from "axios";

const InputFields = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [type, setType] = useState("");

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

      const response = await axios.post("/api/products/add", formData, {
        headers: {
          "Authorization": "Bearer " + token
        }
      });

      console.log("Відповідь сервера:", response.data);
    } catch (error) {
      console.error(
        "Помилка відправлення:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="inputContainer">
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
            required
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

        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default InputFields;