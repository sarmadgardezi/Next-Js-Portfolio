import Link from 'next/link';

import { useThemeValue } from '@hooks/useThemeValue';
import { useHasMounted } from '@hooks/useHasMounted';

type LogoColors = {
  text?: string;
  circle?: string;
};

const SvgWrapper: React.FC = ({ children }) => {
  return (
    <svg
      width="157"
      height="43"
      viewBox="0 0 157 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export const Logo = ({
  asLink,
  colors,
}: {
  asLink?: boolean;
  colors?: LogoColors;
}) => {
  const hasMounted = useHasMounted();
  const theme = useThemeValue();

  if (!hasMounted) return <SvgWrapper />;

  const LogoSvg = (
    <SvgWrapper>
      <path
        d="M3.04 30.416V14.832C3.04 14.4907 2.976 14.256 2.848 14.128C2.74133 14 2.53867 13.9253 2.24 13.904L1.12 13.84V11.184H6.816V25.04C7.98933 24.9333 9.01333 24.5707 9.888 23.952C10.7627 23.3333 11.36 22.5227 11.68 21.52C11.744 21.3067 11.776 21.136 11.776 21.008C11.776 20.6453 11.5733 20.464 11.168 20.464L9.952 20.4V17.904H16.576V20.496L15.04 20.56C14.7627 22.736 13.824 24.4533 12.224 25.712L15.36 31.344L17.312 31.44V34H12.64L8.992 27.344C8.288 27.536 7.56267 27.6853 6.816 27.792V31.344H6.848L8.672 31.44V34H1.056V31.568L2.112 31.472C2.432 31.4293 2.66667 31.344 2.816 31.216C2.96533 31.0667 3.04 30.8 3.04 30.416ZM25.8848 31.664C28.2101 31.664 29.3728 29.7867 29.3728 26.032C29.3728 24.1333 29.1061 22.6933 28.5728 21.712C28.0608 20.7307 27.1861 20.24 25.9488 20.24C24.7328 20.24 23.8368 20.7093 23.2608 21.648C22.6848 22.5867 22.3968 23.8667 22.3968 25.488C22.3968 28.496 22.9514 30.384 24.0608 31.152C24.5514 31.4933 25.1594 31.664 25.8848 31.664ZM18.5247 25.936C18.5247 24.3573 18.7594 22.992 19.2288 21.84C19.6981 20.6667 20.3274 19.7707 21.1168 19.152C22.6314 18 24.3061 17.424 26.1408 17.424C27.4208 17.424 28.4981 17.6373 29.3728 18.064C30.2688 18.4693 30.9621 18.9493 31.4528 19.504C31.9648 20.0373 32.3914 20.8267 32.7328 21.872C33.0954 22.896 33.2768 24.112 33.2768 25.52C33.2768 28.464 32.5621 30.6933 31.1328 32.208C29.7034 33.7227 27.8688 34.48 25.6288 34.48C23.4101 34.48 21.6714 33.7653 20.4128 32.336C19.1541 30.8853 18.5247 28.752 18.5247 25.936ZM35.239 20.464V17.904H40.647V19.984C41.2017 19.1947 41.9377 18.576 42.855 18.128C43.7723 17.6587 44.7643 17.424 45.831 17.424C47.4523 17.424 48.7003 17.8933 49.575 18.832C50.471 19.7493 50.919 21.136 50.919 22.992V31.344L52.743 31.44V34H45.127V31.568L46.183 31.472C46.503 31.4293 46.7377 31.344 46.887 31.216C47.0363 31.0667 47.111 30.8 47.111 30.416V23.824C47.111 22.6507 46.9297 21.7867 46.567 21.232C46.2043 20.656 45.511 20.368 44.487 20.368C43.4843 20.368 42.6843 20.688 42.087 21.328C41.4897 21.968 41.191 22.7253 41.191 23.6V31.344L43.015 31.44V34H35.399V31.568L36.455 31.472C36.775 31.4293 37.0097 31.344 37.159 31.216C37.3083 31.0667 37.383 30.8 37.383 30.416V21.552C37.383 20.912 37.1163 20.5813 36.583 20.56L35.239 20.464ZM63.0025 20.336C62.4905 20.144 61.8718 20.048 61.1465 20.048C60.4212 20.048 59.8345 20.2187 59.3865 20.56C58.9598 20.88 58.7465 21.2853 58.7465 21.776C58.7465 22.2453 58.8212 22.6187 58.9705 22.896C59.1412 23.152 59.3972 23.376 59.7385 23.568C60.2718 23.8453 60.9118 24.0907 61.6585 24.304C62.4052 24.496 62.9598 24.656 63.3225 24.784C63.6852 24.8907 64.1332 25.0827 64.6665 25.36C65.2212 25.6373 65.6372 25.936 65.9145 26.256C66.6612 27.0453 67.0345 28.0587 67.0345 29.296C67.0345 30.896 66.4478 32.1547 65.2745 33.072C64.1225 33.968 62.6505 34.416 60.8585 34.416C58.2558 34.416 56.2932 34.0853 54.9705 33.424V28.976L57.8505 28.752V30.288C57.8505 31.2267 58.7465 31.696 60.5385 31.696C62.3305 31.696 63.2265 31.0453 63.2265 29.744C63.2265 29.2747 63.0665 28.8907 62.7465 28.592C62.4478 28.2933 62.1492 28.0907 61.8505 27.984C61.5518 27.8773 61.1892 27.7707 60.7625 27.664C60.3572 27.5573 59.9518 27.4507 59.5465 27.344C59.1625 27.2373 58.7358 27.0987 58.2665 26.928C57.8185 26.736 57.3172 26.4693 56.7625 26.128C55.6745 25.424 55.1305 24.2507 55.1305 22.608C55.1305 20.944 55.7172 19.664 56.8905 18.768C58.0638 17.872 59.5358 17.424 61.3065 17.424C63.0985 17.424 64.8692 17.8507 66.6185 18.704V22.544L63.7385 22.768V21.424C63.7385 20.8907 63.4932 20.528 63.0025 20.336ZM72.2955 14.512H74.3755V17.904H78.6315L78.3115 20.592H74.3755V29.008C74.3755 29.9467 74.5462 30.608 74.8875 30.992C75.2288 31.3547 75.7515 31.536 76.4555 31.536C77.1808 31.536 77.9062 31.312 78.6315 30.864L79.5915 33.328C78.5248 34.0747 77.1702 34.448 75.5275 34.448C74.5675 34.448 73.7568 34.32 73.0955 34.064C72.4342 33.8293 71.9435 33.5627 71.6235 33.264C71.3035 32.9653 71.0582 32.528 70.8875 31.952C70.7168 31.376 70.6208 30.928 70.5995 30.608C70.5782 30.2667 70.5675 29.776 70.5675 29.136V20.592H68.2955L68.6155 18.256C69.6182 18.1707 70.3755 17.8187 70.8875 17.2C71.3995 16.56 71.8688 15.664 72.2955 14.512ZM95.174 18.544V30.448C95.174 30.7893 95.2273 31.024 95.334 31.152C95.462 31.28 95.6753 31.3547 95.974 31.376L96.998 31.44V34H91.91V32.144L91.814 32.112C90.7473 33.648 89.286 34.416 87.43 34.416C85.254 34.416 83.6433 33.7227 82.598 32.336C81.5527 30.9493 81.03 29.0507 81.03 26.64C81.03 23.7387 81.734 21.4773 83.142 19.856C84.55 18.2347 86.662 17.424 89.478 17.424C91.2913 17.424 93.19 17.7973 95.174 18.544ZM91.462 28.912V20.624C90.8647 20.3467 90.0433 20.208 88.998 20.208C87.5687 20.208 86.534 20.784 85.894 21.936C85.254 23.088 84.934 24.6133 84.934 26.512C84.934 29.968 86.0433 31.696 88.262 31.696C89.2007 31.696 89.9687 31.4187 90.566 30.864C91.1633 30.288 91.462 29.6373 91.462 28.912ZM98.7703 20.464V17.904H104.178V19.984C104.733 19.1947 105.469 18.576 106.386 18.128C107.304 17.6587 108.296 17.424 109.362 17.424C110.984 17.424 112.232 17.8933 113.106 18.832C114.002 19.7493 114.45 21.136 114.45 22.992V31.344L116.274 31.44V34H108.658V31.568L109.714 31.472C110.034 31.4293 110.269 31.344 110.418 31.216C110.568 31.0667 110.642 30.8 110.642 30.416V23.824C110.642 22.6507 110.461 21.7867 110.098 21.232C109.736 20.656 109.042 20.368 108.018 20.368C107.016 20.368 106.216 20.688 105.618 21.328C105.021 21.968 104.722 22.7253 104.722 23.6V31.344L106.546 31.44V34H98.9303V31.568L99.9863 31.472C100.306 31.4293 100.541 31.344 100.69 31.216C100.84 31.0667 100.914 30.8 100.914 30.416V21.552C100.914 20.912 100.648 20.5813 100.114 20.56L98.7703 20.464ZM120.421 14.512H122.501V17.904H126.757L126.437 20.592H122.501V29.008C122.501 29.9467 122.671 30.608 123.013 30.992C123.354 31.3547 123.877 31.536 124.581 31.536C125.306 31.536 126.031 31.312 126.757 30.864L127.717 33.328C126.65 34.0747 125.295 34.448 123.653 34.448C122.693 34.448 121.882 34.32 121.221 34.064C120.559 33.8293 120.069 33.5627 119.749 33.264C119.429 32.9653 119.183 32.528 119.013 31.952C118.842 31.376 118.746 30.928 118.725 30.608C118.703 30.2667 118.693 29.776 118.693 29.136V20.592H116.421L116.741 18.256C117.743 18.1707 118.501 17.8187 119.013 17.2C119.525 16.56 119.994 15.664 120.421 14.512ZM134.723 17.904V31.344L136.547 31.44V34H128.931V31.568L129.987 31.472C130.606 31.408 130.915 31.0667 130.915 30.448V21.552C130.915 21.1893 130.851 20.944 130.723 20.816C130.616 20.688 130.414 20.624 130.115 20.624L128.995 20.56V17.904H134.723ZM130.691 15.152C130.243 14.704 130.019 14.1387 130.019 13.456C130.019 12.7733 130.243 12.208 130.691 11.76C131.139 11.2907 131.726 11.056 132.451 11.056C133.176 11.056 133.763 11.2907 134.211 11.76C134.68 12.208 134.915 12.7733 134.915 13.456C134.915 14.1387 134.68 14.704 134.211 15.152C133.763 15.5787 133.176 15.792 132.451 15.792C131.726 15.792 131.139 15.5787 130.691 15.152ZM138.208 20.464V17.904H143.616V19.984C144.17 19.1947 144.906 18.576 145.824 18.128C146.741 17.6587 147.733 17.424 148.8 17.424C150.421 17.424 151.669 17.8933 152.544 18.832C153.44 19.7493 153.888 21.136 153.888 22.992V31.344L155.712 31.44V34H148.096V31.568L149.152 31.472C149.472 31.4293 149.706 31.344 149.856 31.216C150.005 31.0667 150.08 30.8 150.08 30.416V23.824C150.08 22.6507 149.898 21.7867 149.536 21.232C149.173 20.656 148.48 20.368 147.456 20.368C146.453 20.368 145.653 20.688 145.056 21.328C144.458 21.968 144.16 22.7253 144.16 23.6V31.344L145.984 31.44V34H138.368V31.568L139.424 31.472C139.744 31.4293 139.978 31.344 140.128 31.216C140.277 31.0667 140.352 30.8 140.352 30.416V21.552C140.352 20.912 140.085 20.5813 139.552 20.56L138.208 20.464Z"
        fill={colors?.text ?? theme.colors.primary900.value}
      />
      <circle
        cx="132"
        cy="14"
        r="3"
        fill={colors?.circle ?? theme.colors.primary500.value}
      />
    </SvgWrapper>
  );

  if (!asLink) return LogoSvg;

  return (
    <Link href="/" passHref>
      <a aria-label="Go to home page" className="logo">
      Sarmad Gardezi
      </a>
    </Link>
  );
};
