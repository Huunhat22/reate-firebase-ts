import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState,AppDispatch } from "./app/store";

// định nghĩa các hook cho tiện sử dụng
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector