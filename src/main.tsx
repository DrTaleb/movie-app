import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.tsx";
import ReduxProvider from "@/providers/ReduxProvider.tsx";
import QueryProvider from "@/providers/QueryProvider.tsx";
import { setupAxios } from '@/utils/axios/axios';
import axios from 'axios';
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Touriper mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Touriper interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </ReduxProvider>
  </React.StrictMode>
);
