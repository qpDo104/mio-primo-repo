"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Card from "./components/Card"; 

function SplitButton() { 
  const router = useRouter();

  const options = [
    "Marco Galluzzo, as STALLION",
    "Dario Ferracci, as MOONRYDE",
    "Megan Garner, as MEGSOUNDSLIKEEGG",
    "Ester Bjøru, as EASTAHH",
  ];

  const playerRoutes: { [key: string]: string } = {
    "Marco Galluzzo, as STALLION": "/data/stallion",
    "Dario Ferracci, as MOONRYDE": "/data/moonryde",  // corretto
    "Megan Garner, as MEGSOUNDSLIKEEGG": "/data/egg",
    "Ester Bjøru, as EASTAHH": "/data/eastahh",
  }; 

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    const selectedOption = options[selectedIndex];
    const route = playerRoutes[selectedOption];
    if (route) {
      router.push(route);
    }
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Card title="Menu Selection" description="Select a player" imageUrl="">
        <ButtonGroup
          variant="contained"
          ref={anchorRef}
          aria-label="Button group with a nested menu"
        >
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <Button
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          />
        </ButtonGroup>
        <Popper
          sx={{ zIndex: 1 }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Card>
    </>
  );
}


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans white dark:bg-black background-color #fff">
      <main className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col gap-4">
            <Card 
                title="Card 1" 
                description="Descrizione card 1" 
                imageUrl="/path/to/image1.jpg" 
            />
            <Card 
                title="Card 2" 
                description="Descrizione card 2" 
                imageUrl="/path/to/image2.jpg" 
            />
            <Card 
                title="Card 3" 
                description="Descrizione card 3" 
                imageUrl="/path/to/image3.jpg" 
            />
        </div>
        
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            href="/text/login"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            ISCRIVITI
          </Link>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://fnatic.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            FORUM
          </a>
        </div>
      </main>
    </div>
  );
}