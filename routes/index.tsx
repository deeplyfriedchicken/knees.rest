import { LinkItem } from "../components/LinkItem.tsx";

const Links = [
  { name: 'YouTube', imgPath: "/youtube.webp", url: "https://www.youtube.com/@JumpingIsGood" },
  { name: 'Instagram', imgPath: "/instagram.webp", url: "https://www.instagram.com/jumping.is.good/" },
  { name: 'Oakland Mini 6/2/2024', imgPath: "/google_drive.webp", url: "https://drive.google.com/drive/folders/1UFbx9db0--c-cyZmcXnqut3eu2D_x-5v?usp=drive_link" },
  { name: 'LA Mini 2024', imgPath: "/google_drive.webp", url: "https://drive.google.com/drive/folders/1LOoQaPULizTWSIHuTPT58T_T9Q0BlDgw?usp=drive_link" },
  { name: 'SF 9MAN Nationals 2024', imgPath: "/google_drive.webp", url: "https://drive.google.com/drive/folders/1ew5iuq4YMUdqpcnN--7--nS3w-doBCL6?usp=sharing" },
]

export default function Home() {
  return (
    <div class="container mx-auto">
      <div class="max-w-xs mx-auto">
        {Links.map((linkProps) => (
          <LinkItem {...linkProps} />
        ))}
      </div>
    </div>
  );
}
