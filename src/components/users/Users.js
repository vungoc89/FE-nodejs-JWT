import React, { useState, useEffect } from "react";
// import {useHistory} from 'react-router-dom';
import { fetchAllUser, deleteUser } from "../../services/userService";
import ReactPaginate from 'react-paginate';
import {toast } from "react-toastify";
import ModalDelete from "./ModalDelete";
import ModalUser from "./ModalUser";
const Users = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(2);
const [totalPages, setTotalPages] = useState(0);

const [isShowModalDelete, setIsShowModalDelete] = useState(false);
const [dataModal, setDataModal] = useState({});
  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    // let res = await fetchAllUser();
    // if (res && res.data && res.data.EC === 0) {
    //   setListUsers(res.data.DT);
    //   console.log(res.data.DT);
    // }
    let res = await fetchAllUser(currentPage, currentLimit);
    if (res && res.data && res.data.EC === 0) {
        setTotalPages(res.data.DT.totalPages);
        setListUsers(res.data.DT.users);
    }
  };
  const handlePageClick = async(event) => {
    // console.log(">>>check event: ", event);
    setCurrentPage(+event.selected + 1);
    // await fetchUsers(+event.selected + 1);
  };

  const handleDeleteUser = async(user) => {
    setDataModal(user);
    setIsShowModalDelete(true);
   
  }

  const handleClose = () => {
    setIsShowModalDelete(false);
    setDataModal({});
  }

  const confirmDeleteUser = async() => {
    let res = await deleteUser(dataModal);
    // console.log(">>>check res:", res);
    if(res && res.data.EC === 0){
      toast.success(res.data.EM);
      await fetchUsers();
      setIsShowModalDelete(false);
    }else{
      toast.error(res.data.EM);
    }
  }
  return (
    <>
      <div className="container">

      <div className="manage-users-container">
        <div className="user-header">
          <div className="title">
            <h3>Table Users</h3>
          </div>
          <div className="actions">
            <button className="btn btn-success">Refresh</button>
            <button className="btn btn-primary">Add new user</button>
          </div>
        </div>
        <div className="user-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
                <th scope="col">Group</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listUsers && listUsers.length > 0 ? (
                <>
                  {listUsers.map((item, index) => {
                    return (
                      <tr key={`row-${index}`}>
                        <td>{index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                        <td>{item.Group ? item.Group.name : ""}</td>
                        <td>
                            <button className="btn btn-warning mx-3">Edit</button>
                            <button className="btn btn-danger"
                            onClick={()=>handleDeleteUser(item)}
                            >Delete</button>
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <>
                  <tr>
                    <td>Not found users</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
        {totalPages > 0 && 
        <div className="user-footer">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={totalPages}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
        </div>
        }
      </div>
      
      </div>
      <ModalDelete
      show = {isShowModalDelete}
      handleClose={handleClose}
      confirmDeleteUser={confirmDeleteUser}
      dataModal={dataModal}
      />
      <ModalUser
      title={"Create a new user"}
      />
    </>
  );
};

export default Users;
