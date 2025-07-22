import axios from "axios";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function SinglePage() {
    const data = useParams()
    const [blog, setBlog] = useState({})
    async function fetchSingleBlog() {
        const response = await axios.get("https://687d0668918b64224330c8f8.mockapi.io/Blogs/" + data.id)
        if (response.status == 200) {
            setBlog(response.data)
        } else {
            alert("Something went wrong")
        }
    }
    useEffect(() => {
        fetchSingleBlog()
    }, [])
    const navigate = useNavigate()
    async function deleteBlog() {
        const response = await axios.delete("https://687d0668918b64224330c8f8.mockapi.io/Blogs/" + data.id)
        if (response.status == 200) {
            navigate("/")
        } else {
            alert("something went wrong ")
        }
    }
    return (
        <>
            <Navbar />
            <div>
                <img src={blog.image} alt="" />
                <h1>{blog.Title} </h1>
                <h3>{blog.Subtitle}</h3>
                <p>{blog.Description}</p>
                <Link to={'/EditPage/' + blog.id}> <button className="bg-blue-500 text-white">Edit Me </button></Link>
                <button onClick={deleteBlog} className="bg-red-500 text-white">Delete Me </button>
            </div>
        </>

    )
}


export default SinglePage