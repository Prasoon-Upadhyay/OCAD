
import { useContext } from "react";
import { RequestContext } from "../context/requests";

export default function useRequest() {

    return useContext(RequestContext)

}