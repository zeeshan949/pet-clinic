import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import {
  AuthPage,
  notificationProvider,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-nextjs-router";
import { dataProvider } from "@pankod/refine-supabase";
import "@pankod/refine-antd/dist/reset.css";
import { authProvider } from "src/authProvider";
import { supabaseClient } from "src/utility";
import { AntdInferencer } from "@pankod/refine-inferencer/antd";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "@components/layout";
import { OwnerList, OwnerCreate, OwnerEdit, OwnerShow } from "./owners";
import { DashboardPage } from "./dashboard";
import { TypeCreate, TypeEdit, TypeList, TypeShow } from "./types";
import { SpecialtyCreate, SpecialtyEdit, SpecialtyList, SpecialtyShow } from "./specialties";
import { VetCreate, VetEdit, VetList, VetShow } from "./vets";
import { VetSpecialtyCreate, VetSpecialtyEdit, VetSpecialtyList, VetSpecialtyShow } from "./vet_specialties";
import { PetCreate, PetEdit, PetList, PetShow } from "./pets";
import { VisitCreate, VisitEdit, VisitList, VisitShow } from "./visits";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Refine
      dataProvider={dataProvider(supabaseClient)}
      authProvider={authProvider}
      routerProvider={{
        ...routerProvider,
        routes: [
          {
            path: "/register",
            element: <AuthPage type="register" />,
          },
          {
            path: "/forgot-password",
            element: <AuthPage type="forgotPassword" />,
          },
          {
            path: "/update-password",
            element: <AuthPage type="updatePassword" />,
          },
        ],
      }}
      LoginPage={() => (
        <AuthPage
          type="login" rememberMe = {false}
        />
      )}
      notificationProvider={notificationProvider}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      DashboardPage={DashboardPage}
      OffLayoutArea={OffLayoutArea}

      resources={[
        {
            name: "types",
            list: TypeList,
            show: TypeShow,
            create: TypeCreate,
            edit: TypeEdit,
            canDelete: true,
        },
        {
          name: "specialties",
          list: SpecialtyList,
          show: SpecialtyShow,
          create: SpecialtyCreate,
          edit: SpecialtyEdit,
          canDelete: true,
        },
        {
          name: "vets",
          list: VetList,
          show: VetShow,
          create: VetCreate,
          edit: VetEdit,
          canDelete: true,
        },
        {
          name: "owners",
          list: OwnerList,
          show: OwnerShow,
          create: OwnerCreate,
          edit: OwnerEdit,
          canDelete: true,
        },
        {
          name: "vet_specialties",
          list: VetSpecialtyList,
          show: VetSpecialtyShow,
          create: VetSpecialtyCreate,
          edit: VetSpecialtyEdit,
          canDelete: true,
        },
        {
          name: "visits",
          list: VisitList,
          show: VisitShow,
          create: VisitCreate,
          edit: VisitEdit,
          canDelete: true,
        },
        {
          name: "pets",
          list: PetList,
          show: PetShow,
          create: PetCreate,
          edit: PetEdit,
          canDelete: true,
        },
      ]}
    >
      <Component {...pageProps} />
    </Refine>
  );
}

export default MyApp;
