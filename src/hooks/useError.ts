
import { useContext } from "react";
import { ErrorContext } from "../context/error";


export default function useError () {

    return useContext(ErrorContext)

}
