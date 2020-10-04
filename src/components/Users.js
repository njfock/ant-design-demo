import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Table} from 'antd'
import {
  actionCreators as usersActions,
  selector as usersSelector,
} from "../features/users"

const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector((state)=>usersSelector(state))
    useEffect(()=>{
      dispatch(usersActions.list());
    }, [dispatch])
    const dataSource = users.dataSource
      
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name'
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
        },
      ];
      
    return (<Table dataSource={dataSource} columns={columns} loading={users.loading} rowKey="id"/>);
}

export default Users;