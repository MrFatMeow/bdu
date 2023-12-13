import { NextComponentType, NextPageContext } from "next";
import { NextIntlClientProvider } from "next-intl";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";

import { ProvideAuth } from "../context/AuthContext";
import { ProvideCart } from "../context/cart/CartProvider";
import { ProvideWishlist } from "../context/wishlist/WishlistProvider";

import "animate.css";
import "nprogress/nprogress.css";
import "../styles/globals.css";

// Import Swiper styles
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "react-query";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import "swiper/swiper.min.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type AppCustomProps = {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
  cartState: string;
  wishlistState: string;
};

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppCustomProps) => {
  const router = useRouter();

  return (
    <MantineProvider  defaultColorScheme="light">
      <Notifications />
      <NextIntlClientProvider
        messages={pageProps?.messages}
        locale={router.locale}
      >
        <QueryClientProvider client={queryClient}>
          <ProvideAuth>
            <ProvideWishlist>
              <ProvideCart>
                <Component {...pageProps} />
              </ProvideCart>
            </ProvideWishlist>
          </ProvideAuth>
        </QueryClientProvider>
      </NextIntlClientProvider>
    </MantineProvider>
  );
};

export default MyApp;
