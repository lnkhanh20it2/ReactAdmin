import React, { useContext, useEffect } from 'react'
import "./userList.css";
import { DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { UserContext } from '../../context/userContext/UserContext';
import { deleteUser, getUsers } from '../../context/userContext/apiCalls';
export default function UserList() {
  const { users, dispatch } = useContext(UserContext);

    useEffect(() => {
      getUsers(dispatch);
    }, [dispatch]);
    const handleDelete = (id) => {
      deleteUser(id, dispatch);
    };
    const columns = [
        { field: '_id', headerName: 'ID', width: 150 },
        { field: 'username', headerName: 'User', width: 200},
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'isAdmin', headerName: 'isAdmin', width: 150 },
         {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <DeleteOutline
                  className="userListDelete"
                  onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
      ];
    return (
        <div class="userList">
        <div style={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={users}
            disableSelectionOnClick
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[8]}
            checkboxSelection
            getRowId={(r) => r._id}
          />
        </div>
        </div>
      );
}
