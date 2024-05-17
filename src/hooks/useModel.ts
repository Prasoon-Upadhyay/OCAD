
import { useContext } from "react";
import { ModelContext } from "../context/models";

export default function useModel() {

    return useContext(ModelContext)
}