import axios from "axios";


const UploadPhoto = async (image)=> {
    const formData = new FormData();
    formData.append('image', image);
    const {data} = await axios.post('https://api.imgbb.com/1/upload?key=36dde415dc7cdbdc03ca46fd520bb70d',formData)
    return data;
}


export default UploadPhoto