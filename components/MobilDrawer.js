import React from 'react';
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const MobilDrawer = ({ isNavOpen, toggleNavDrawer }) => {
    return (
        <Drawer
        open={isNavOpen}
        onClose={toggleNavDrawer}
        direction="left"
        duration={300}
        overlayOpacity={0.7}
        lockBackgroundScroll
        size={300}
      >
      <h1>This is our drawer</h1>
      </Drawer>
    );
};

export default MobilDrawer;