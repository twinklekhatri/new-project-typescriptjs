import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell } from "@mui/material";

interface UserData {
  id: number;
  name: string;
  username: string;
}

const Work5: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<{ data: UserData[] }>("http://localhost:8080/user");
      console.log(response.data.data);
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>USERNAME</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.name}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Work5;
