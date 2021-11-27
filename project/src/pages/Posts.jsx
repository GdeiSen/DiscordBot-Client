import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import ModalDelete from "../components/Modal/ModalDel";
import ModalAdd from "../components/Modal/ModalAddpost";
import ModalPost from "../components/Modal/ModalPost";
import ReactPaginate from "react-paginate";
const Posts = () => {
  const trigger = useRef(null);
  const [posts, setposts] = useState([]);
  const [idDel, setId] = useState();
  const [filter, setFilter] = useState(posts);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [ShowModalPost, setShowModalPost] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const observer = useRef(null);
  const [PostsMaximum, setPostsMaximum] = useState(5);
  const [page, setPage] = useState(1);
  const limit = 10;
  const pageCount = 100/limit;
  const [modalPost, setModalPost] = useState({
    title: "",
    body: "",
    id: "",
  });
  const [post, setpost] = useState({
    title: "",
    body: "",
    id: "",
  });

  const pageChange = async (page) => {
    setPage(page.selected + 1)
  }

  const getSearch = () => {
    if (filter) {
      return filter;
    }
    return posts;
  };
  const postsSearch = getSearch();

  const onChange = (e) => {
    setPostsMaximum(5);
    if (e.target.id == "title") {
      setpost({ ...post, title: e.target.value });
    } else if (e.target.id == "body") {
      setpost({ ...post, body: e.target.value });
    } else if (e.target.id == "id") {
      setpost({ ...post, id: e.target.value });
    } else {
      setFilter(
        posts.filter((post) => {
          return post.title
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        })
      );
    }
  };

  const addPost = () => {
    posts.map((elem) => {
      if (elem.id == post.id) {
        post.id = post.title;
      }
    });
    setposts([...posts, post]);
    clear();
  };

  useEffect(() => {
    if(loadData) return;
    if(observer.current) observer.current.disconnect();
    const callback = function(entries, observer){
        if(entries[0].isIntersecting){setPage(page+1)}}
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(trigger.current);
  }, [loadData]);

  useEffect(() => {
    fetchposts();
    setFilter(posts);
  }, [page]);

  const showModalFunc = (id) => {
    setShowModalDelete(!showModalDelete);
    setId(id);
  };

  const clear = () => {
    setpost({ title: "", body: "", id: "" });
  };

  const fetchposts = async () => {
    setLoadData(true);
    const postsFetched = await Axios.get("https://jsonplaceholder.typicode.com/posts",{
      params:{
        _limit:limit,
        _page: page
      }
    });
    setposts([...posts,...postsFetched.data]);
    setLoadData(false);
  };

  const deletePost = () => {
    setposts(posts.filter((post) => post.id !== idDel));
    setShowModalDelete(!showModalDelete);
  };

  const showPostFunc = (id, body, title) => {
    setModalPost({
      title: title,
      body: body,
      id: id,
    });
    setShowModalPost(!ShowModalPost);
  };

  return (
    <>
      <div className="container">
        <h4>All New And Fresh Posts</h4>
        <ModalDelete visible={showModalDelete} setVisible={setShowModalDelete}>
          <h5>
            Are you really sure that you wanna delete this file from dataBase?
          </h5>
          <a
            class="waves-effect waves-light btn-large right black"
            onClick={() => deletePost()}
          >
            Yes
          </a>
          <a
            class="waves-effect waves-light btn-large left black"
            onClick={() => setShowModalDelete(!showModalDelete)}
          >
            No
          </a>
        </ModalDelete>

        <ModalAdd visible={showModalAdd} setVisible={setShowModalAdd}>
          <>
            <div className="input-field col s6">
              <i className="material-icons prefix">add</i>
              <input
                id="title"
                type="text"
                class="validate"
                value={post.title}
                placeholder="Enter title"
                onChange={onChange}
              />
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">add</i>
              <input
                id="body"
                type="text"
                class="validate"
                value={post.body}
                placeholder="Enter body"
                onChange={onChange}
              />
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">add</i>
              <input
                id="id"
                type="tel"
                class="validate"
                value={post.id}
                placeholder="Enter id"
                onChange={onChange}
              />
            </div>
            <a
              id="Add"
              className="waves-effect waves-light btn m-1"
              onClick={() => addPost()}
            >
              Add
            </a>
            <a
              className="waves-effect waves-light btn m-1 right"
              onClick={() => clear()}
            >
              Cancel
            </a>
          </>
        </ModalAdd>

        <ModalPost visible={ShowModalPost} setVisible={setShowModalPost}>
          <div class="row">
            <div class="card">
              <div class="card-image">
                <img src="https://i.yapx.ru/O39J1.jpg" />
                <span class="card-title">{modalPost.title}</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red">
                  <i class="material-icons">delete</i>
                </a>
              </div>
              <div class="card-content">
                <p>{modalPost.body}</p>
                <p>{modalPost.id}</p>
              </div>
            </div>
          </div>
        </ModalPost>

        <div className="row m-12">
          <div className="input-field col s">
            <i className="material-icons prefix">search</i>
            <textarea
              onChange={onChange}
              id="icon_prefix2"
              className="materialize-textarea"
              placeholder="search"
            ></textarea>
          </div>
        </div>
        <div class="col s12 m7">
          <div className="row m-1">
            <div className="col s4">
              <div className="row m-12" />
              <div className="row m-12">
                <a
                  className="waves-effect waves-light btn black"
                  onClick={() => setShowModalAdd(!showModalAdd)}
                >
                  Add post
                </a>
              </div>
            </div>
            <div className="col s8"></div>
          </div>
          {postsSearch && posts.map((post) => {
            // if(PostsMaximum > index){
            //   index++;
             return(
            <div class="row">
                <div class="col s12 m6">
                  <div class="card">
                    <div class="card-image">
                      <img
                        src="https://i.yapx.ru/O39J1.jpg"
                        onClick={() =>
                          showPostFunc(post.id, post.body, post.title)
                        }
                      />
                      <span class="card-title">{post.title}</span>
                      <a class="btn-floating halfway-fab waves-effect waves-light red">
                        <i
                          class="material-icons"
                          onClick={() => showModalFunc(post.id)}
                        >
                          delete
                        </i>
                      </a>
                    </div>
                    <div class="card-content">
                      <p>{post.body}</p>
                      <p>{post.id}</p>
                    </div>
                  </div>
                </div>
              </div>)})}
        </div>
        {/* <a
          className="waves-effect waves-light btn black"
          onClick={() => {setPostsMaximum(PostsMaximum+5)}}
        >
          Show More
        </a> */}
        <div ref = {trigger}>Trigger</div>
        <ReactPaginate
          className="pagination pointer"
          activeClassName = "active black"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={pageChange}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
      />
        <div className="row"/>
      </div>
    </>
  );
};

export default Posts;
