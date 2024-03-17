import sqlite3 from "sqlite3";
import { open } from "sqlite";

 export async function dbconnect (){
  return await open({
        filename: "./dua_main.sqlite",
        driver: sqlite3.Database,
      });
  }
