import { useState } from "react"
import { useDispatch } from "react-redux"
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from "@mui/icons-material"
import { AppBar, Box, Button, IconButton, InputBase, Toolbar, useTheme } from "@mui/material"
import FlexBetween from "./FlexBetween.jsx"
import { setMode } from "../states/global.js"
import profileImage from '../assets/profileImage.png'

// eslint-disable-next-line react/prop-types
const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {

    const [anchorEl, setAnchorEl] = useState(null)

    const dispatch = useDispatch()
    const theme = useTheme()

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar sx={{ position: "static", background: "none", boxShadow: "none" }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* LEFT SIDE */}
                <FlexBetween>
                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <MenuIcon />
                    </IconButton>
                    <FlexBetween backgroundColor={theme.palette.background.alt} borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
                        <InputBase placeholder="Search..." />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>

                {/* RIGHT SIDE */}
                <FlexBetween gap="1.5rem">
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === 'dark' ? <DarkModeOutlined sx={{ fontSize: "25px" }} /> : <LightModeOutlined sx={{ fontSize: "25px" }} />}
                    </IconButton>
                    <IconButton>
                        <SettingsOutlined sx={{ fontSize: "25px" }} />
                    </IconButton>
                    <Button onClick={handleClick} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textTransform: "none", gap: "1rem" }}>
                        <Box component="img" alt="profile" src={profileImage} height="32px" width="32px" borderRadius="50%" sx={{ objectFit: "cover" }}></Box>
                    </Button>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
