import React, { useState } from "react";
import { FileOutlined, TableOutlined } from "@ant-design/icons";
import { Divider, Menu, Switch } from "antd";
import tableIcon from "../assets/icons/tables.png";
import { Link } from "react-router-dom";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to={"Розклад"}>Розклад</Link>, "1", <FileOutlined />),

  getItem("Таблиці", "sub1", <TableOutlined />, [
    getItem(<Link to={"/tables"}>Таблиці</Link>, "2"),
    getItem(<Link to={"/create-new-plan"}>Створити план</Link>, "3"),
    getItem(<Link to={"/upload-plan"}>Завантажити план</Link>, "4"),
  ]),
];
const UserMenu = () => {
  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");
  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </>
  );
};
export default UserMenu;
{
  /* <List>
          <Link to={"/"}>
            <ListItem key={"Розклад"} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <i style={{ fontSize: 24 }} class="lar la-file-alt"></i>
                </ListItemIcon>
                <ListItemText
                  primary={"Розклад"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={"/tables"}>
            <ListItem key={"Таблиці"} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <i style={{ fontSize: 24 }} class="las la-table"></i>
                </ListItemIcon>
                <ListItemText
                  primary={"Таблиці"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List> */
}
