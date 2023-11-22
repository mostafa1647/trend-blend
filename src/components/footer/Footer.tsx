import { Link } from '@nextui-org/react';

export const Footer = () => {
  return (
    <div className="container m-auto flex items-center justify-center p-4">
      <p className="font-bold text-foreground">
        © {new Date().getFullYear()}{' '}
        <Link
          href="https://github.com/mostafa1647"
          target="_blank"
          rel="noreferrer noopener"
          showAnchorIcon={true}
          color="primary"
        >
          Mostafa Mojtahedi
        </Link>
        Case Study{' '}
        <Link
          href="https://www.innoscripta.com/"
          target="_blank"
          rel="noreferrer noopener"
          showAnchorIcon={true}
          color="primary"
        >
          Innoscripta
        </Link>
      </p>
    </div>
  );
};
