import { Button } from 'antd';
import './Navbar.css'; // Assuming you store your CSS here
import Link from 'next/link';
const DownloadButton = () => {
  return (
    <Button className="download-btn">
     <Link target="_blank" style={{color:'white !important'}} href={'https://play.google.com/store/apps/details?id=in.livewise'}>DOWNLOAD LIVEWISE</Link> 
    </Button>
  );
};

export default DownloadButton;
