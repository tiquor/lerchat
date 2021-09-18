import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import style from '../styles/aside.module.css';
import { useContext } from 'react';
import ServerContext from '@store/server.context';
import LinkAside from '@components/LinkAside';
import home from "assets/home.svg";
import search from "../assets/search.svg";
import playlist from "../assets/playlist.svg";
import cora from "../assets/cora.svg";

const data = [
  {
    img: home,
    label: "Home"
  },
  {
    img: search,
    label: "Search"
  },
  {
    img: playlist,
    label: "Songs"
  },
  {
    img: cora,
    label: "Favorite"
  }
]


const Aside: FC = ({ children }) => {
  const { servers } = useContext(ServerContext);

  return (
    <section className='vh-100 d-flex'>
      <aside
        className={'bg-ndark d-flex flex-column p-3 gap-3 ' + style.asideContainer}
      >
        {
          data.map(({img,label})=>{
            return(
              <LinkAside key={label} img={img} label={label} />
            )
          })
        }
        {/* {servers?.map((server, idx) => (
          <Link key={idx} href={`/server/${server._id}`}>
            {server.name}
          </Link>
        ))} */}
      </aside>
      <main className='flex-grow-1'>{children}</main>
    </section>
  );
};

export default Aside;
