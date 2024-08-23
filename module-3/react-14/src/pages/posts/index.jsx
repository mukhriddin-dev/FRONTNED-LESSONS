import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { postAPI } from "@service/posts";
import { Loader } from "@components/ui";


const index = () => {
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await postAPI.getAll();
      setPosts(response.data);
      setLoad(false);
    }

    fetchData();
  }, []);

  if (load) {
    return <Loader />;
  }

  return (
    <div>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id} className="border p-2 m-2 relative">
              <div className="p-3 w-[70%]">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
              <Link to={`/posts/${post.id}`}>
                <button className="active:bg-indigo-500 active:text-white hover:bg-slate-100 border px-3 py-1 absolute top-2 right-2">
                  read more <i className="bi bi-three-dots"></i>
                </button>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default index;
