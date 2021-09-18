import Link from "next/link"
const LinkAside = ({img,label}:any) => {

  return (
    <Link href="/">
      < div className="d-flex align-items-center ps-3 bd-highlight  gap-2 rounded bg-link-light  ">
        <img src={img.src} alt="icon"/>
        <p className="tx-wlight fs-6">{label}</p>
      </div>
    </Link>
  )
}

export default LinkAside
