import React, { useState } from "react";

const Add = () => {
    const [formData,setFormData] = useState({
        title: "",
        description: "",
        thumbnail: "",
    });
    const handleThumbnail = (ev) => {
        if(ev.target.files){
            setFormData({
                ...formData,
                thumbnail: ev.target.files[0],
            });

        }
    };
    const handleInputChange = (ev) => {
        const { name,value } = ev.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const onFormSubmit = (ev) => {
        ev.preventDefault();
        if (formData.title && formData.description && formData.thumbnail){
            const form = new FormData();
            form.append("title",formData.title());
            form.append("description",formData.description());
            form.append("thumbnail",formData.thumbnail());
            fetch("http://localhost:4001/api/category")
    }
}
return(
    <div>
    <h1>TYPES OF CATEGORY</h1>
        <form onSubmit={{onFormSubmit}}>
            <label>title:</label>
            <input type='text' name='title' onChange={handleInputChange}/>
            <br/>
             <label>description:</label>
            <input type='text' name='description' onChange={handleInputChange}/>
            <br/>
            <label>thumbnail:</label>
            <input type='text' name='thumbnail' onChange={handleThumbnail}/>
            <br/>
            <button type="button">SUBMIT</button>

            
        </form>
    </div>
)
   
};
export default Add;