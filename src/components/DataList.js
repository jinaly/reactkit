import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  addUsers,
  fetchUsers,
  showTodo,
  deleteUsers,
} from "../reduxCycle/ReduxProvider";

const DataList = () => {
  const dispatch = useDispatch();
  // const  {users}  = useSelector((state) => state.users);
  const todo = useSelector(showTodo);

  const [formField, setFormField] = useState({
    email: "",
    firstname: "",
    lastname: "",
    radio: "",
  });

  const [checkbox, setCheckbox] = useState({
    tiktac: [],
    // response: [],
  });

  /*viewmore viewless data value*/
  const viewData = 3;

  const [sortData, setSortData] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState();
  const [viewMore, setViewMore] = useState(3);

  /* set redux get data in state (useSlectore value in state)*/
  useEffect(() => {
    setSortData(todo.users);
  }, [todo]);

  useEffect(() => {
    dispatch(fetchUsers(), deleteUsers());
  }, [dispatch]);

  const { t, i18n } = useTranslation();

  const addHandleChange = (e) => {
    setFormField({ ...formField, [e.target.name]: e.target.value });
  };

  const checkboxChange = (e) => {
    // const isChecked = e.target.checked;
    const { value, checked } = e.target;
    const { tiktac } = checkbox;

    if (checked) {
      setCheckbox({
        tiktac: [...tiktac, value],
        // response: [...tiktac, value],
      });
      // setCheckbox({ checkbox: [...checkbox, e.target.value] });
      // setCheckbox([...checkbox, e.target.value]);
      // setFormField([...formField, e.target.value]);
    } else {
      setCheckbox({
        tiktac: tiktac.filter((e) => e !== value),
        // response: tiktac.filter((e) => e !== value),
      });
      // const index = checkbox?.indexOf(e.target.value);
      // checkbox?.splice(index, 1);
      // setCheckbox({ checkbox });
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const addNewData = () => {
    dispatch(addUsers(formField, checkbox));
  };

  /*------show button using && oprater*/
  const showHandle = () => {
    setShow(true);
  };

  /*----------------sorting in other way------*/

  // const sortBy =(action)=>{
  // if(action){
  // const strAscending = [...users].sort((a,b)=>a.first_name>b.first_name?1:-1)
  // setSortData(strAscending)
  // console.log(strAscending,"strascending");

  // }else if(action === 2){
  // const strDescending = [...users].sort((a,b)=>a.first_name>b.first_name?-1:1)
  // setSortData(strDescending)
  // console.log(strDescending,"strDescending");
  // }
  // }

  /*--------------------sorting----------------*/
  const sort = (e) => {
    const value = e.target.value;
    const temp = [...sortData];
    if (value === "1") {
      temp.sort((a, b) => (a?.firstname > b?.firstname ? 1 : -1));
    } else if (value === "2") {
      temp.sort((a, b) => (a?.firstname > b?.firstname ? -1 : 1));
    }
    setSortData(temp);
  };

  /*------------view more & view less--------*/
  const onHandleViewMore = () => {
    setViewMore(sortData?.length);
  };
  // console.log(viewMore,"viewmore");

  const onHandleViewLess = () => {
    setViewMore(viewData);
  };

  /*--------view more & view less in one on click-----*/
  const onView = () => {
    if (viewMore === 3) {
      setViewMore(sortData?.length);
    } else if (viewMore > 3) {
      setViewMore(viewData);
    }
  };

  // const deletehandel = (i) => {
  //   dispatch(deleteUsers(i));
  // };

  console.log(formField, "formField");
  console.log(checkbox, "checkbox");

  return (
    <div>
      DataList
      <form onSubmit={addNewData}>
        <div>
          <input
            placeholder="FirstName"
            name="firstname"
            value={formField.firstname}
            onChange={addHandleChange}
          />
        </div>
        <div>
          <input
            placeholder="LastName"
            name="lastname"
            value={formField.lastname}
            onChange={addHandleChange}
          />
        </div>
        <div>
          <input
            placeholder="Email"
            name="email"
            value={formField.email}
            onChange={addHandleChange}
          />
        </div>
        <div>
          <label class="container">
            male
            <input
              type="radio"
              name="radio"
              id="radio"
              value={"male"}
              onChange={addHandleChange}
              required
            />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            female
            <input
              type="radio"
              name="radio"
              id="radio"
              value={"female"}
              onChange={addHandleChange}
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="checkbox"
            value={"chess"}
            onChange={checkboxChange}
          />
          <label>chess</label>
          <input
            type="checkbox"
            name="checkbox"
            value={"badminton"}
            onChange={checkboxChange}
          />
          <label>badminton</label>
          <input
            type="checkbox"
            name="checkbox"
            value={"dom"}
            onChange={checkboxChange}
          />
          <label>dom</label>
          {/* <label class="container">
            chess
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              value={"chess"}
              defaultChecked={true}
              onChange={addHandleChange}
            />
          </label> */}
          {/* <label class="container">
            badminton
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              value={"badminton"}
              onChange={addHandleChange}
            />
          </label>
          <label class="container">
            skipping
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              value={"skipping"}
              onChange={addHandleChange}
            />
          </label> */}
        </div>
        <button type="submit">submit</button>
      </form>
      <div>
        <button value="1" onClick={sort}>
          up
        </button>
        <button value="2" onClick={sort}>
          down
        </button>
      </div>
      <label>FirstName sorting by A-Z or Z-A:</label>
      <select onChange={sort}>
        <option value="1">A-Z</option>
        <option value="2">Z-A</option>
      </select>
      <button onClick={showHandle}>click me for search</button>
      {show && <input type="search" onChange={handleChange} />}
      <table>
        <tr>
          {/* <th>Avatar</th> */}
          <th>{t("FirstName")}</th>
          <th>{t("Email")}</th>
          <th>{t("LastName")}</th>
          {/* <th>Actions</th> */}
        </tr>

        {sortData?.length > 0 &&
          sortData
            ?.filter((usedata) => {
              if (search) {
                return (
                  usedata?.firstname
                    ?.toLowerCase()
                    .indexOf(search?.toLowerCase()) !== -1
                );
              }
              return usedata;
            })
            ?.slice(0, viewMore)
            ?.map((usedata) => {
              return (
                <tr key={usedata?.id}>
                  {/* <td>
                    <img alt="avatar img" src={usedata?.avatar} />
                  </td> */}
                  <td>{t(`${usedata?.firstname}`)}</td>
                  <td>{t(`${usedata?.email}`)}</td>
                  <td>{t(`${usedata?.lastname}`)}</td>
                  <td>
                    {/* <button onClick={() => deletehandel(usedata.id)}> */}
                    {/* Delete */}
                    {/* </button> */}
                  </td>
                </tr>
              );
            })}

        <div>
          {viewMore === viewData ? (
            <button onClick={onHandleViewMore}>View More</button>
          ) : (
            <button onClick={onHandleViewLess}>View Less</button>
          )}
        </div>
        <div>
          {sortData?.length > 3 && (
            <button onClick={onView}>{viewMore > 3 ? "Less" : "More"}</button>
          )}
        </div>
      </table>
    </div>
  );
};

export default DataList;
