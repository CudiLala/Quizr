import { NextApiRequest, NextApiResponse, NextPage } from "next";
import { AppProps } from "next/app";
import React from "react";

export type NextPageWithLayout = NextPage & {
  Layout?: React.FC<{ [key: string]: any }>;
  LayoutProps?: { [key: string]: any };
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type NextApiRequestX = NextApiRequest & {
  user?: any;
};

export type NextApiHandlerX<T = any> = (
  req: NextApiRequestX,
  res: NextApiResponse
) => void | Promise<void>;
