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
import { OwnerList } from "./owners/list";
import { OwnerShow } from "./owners/show";
import { OwnerCreate } from "./owners/create";
import { OwnerEdit } from "./owners/edit";
import { VetList } from "./vets/list";
import { VetShow } from "./vets/show";
import { VetCreate } from "./vets/create";
import { VetEdit } from "./vets/edit";
import { SpecialtyList } from "./specialties/list";
import { SpecialtyShow } from "./specialties/show";
import { SpecialtyCreate } from "./specialties/create";
import { SpecialtyEdit } from "./specialties/edit";
import { VetSpecialtyList } from "./vet_specialties/list";
import { VetSpecialtyCreate } from "./vet_specialties/create";
import { VetSpecialtyEdit } from "./vet_specialties/edit";
import { VetSpecialtyShow } from "./vet_specialties/show";
import { PetShow } from "./pets/show";
import { PetList } from "./pets/list";
import { PetEdit } from "./pets/edit";
import { PetCreate } from "./pets/create";
import { TypeList } from "./types/list";
import { TypeShow } from "./types/show";
import { TypeCreate } from "./types/create";
import { TypeEdit } from "./types/edit";
import { DashboardPage } from "./dashboard";
import VisitList from "./visits/list";
import VisitShow from "./visits/show";
import VisitCreate from "./visits/create";
import VisitEdit from "./visits/edit";

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
