'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

const NavLink = ({ link }) => {
  if (!link || !link.url || !link.title) {
    // Handle error: Invalid link object
    return null;
  }

  const router = useRouter();
  const isActive = router.pathname === link.url;

  const getLinkClassNames = () => {
    const baseClasses = 'rounded p-1 cursor-pointer';
    return isActive ? `${baseClasses} bg-black text-white` : `${baseClasses} hover:bg-black hover:text-white`;
  };

  return (
    <Link href={link.url}>
      <div className={getLinkClassNames()} aria-current={isActive ? 'page' : undefined}>
        {link.title}
      </div>
    </Link>
  );
};

NavLink.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavLink;