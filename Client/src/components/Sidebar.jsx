import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material"
import { AdminPanelSettingsOutlined, CalendarMonthOutlined, ChevronLeft, ChevronRightOutlined, Groups2Outlined, HomeOutlined, PieChartOutlined, PointOfSaleOutlined, PublicOutlined, ReceiptLongOutlined, ShoppingCartOutlined, TodayOutlined, TrendingUpOutlined } from "@mui/icons-material"
import FlexBetween from "./FlexBetween"

const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />,
    },
    {
        text: "Client Facing",
        icon: null,
    },
    {
        text: "Products",
        icon: <ShoppingCartOutlined />,
    },
    {
        text: "Customers",
        icon: <Groups2Outlined />,
    },
    {
        text: "Transactions",
        icon: <ReceiptLongOutlined />,
    },
    {
        text: "Geography",
        icon: <PublicOutlined />,
    },
    {
        text: "Sales",
        icon: null,
    },
    {
        text: "Overview",
        icon: <PointOfSaleOutlined />,
    },
    {
        text: "Daily",
        icon: <TodayOutlined />,
    },
    {
        text: "Monthly",
        icon: <CalendarMonthOutlined />,
    },
    {
        text: "Breakdown",
        icon: <PieChartOutlined />,
    },
    {
        text: "Management",
        icon: null,
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />,
    },
    {
        text: "Performance",
        icon: <TrendingUpOutlined />,
    },
];

// eslint-disable-next-line react/prop-types
const Sidebar = ({ drawerWidth, isSidebarOpen, setIsSidebarOpen, isNonMobile }) => {

    const [activeTab, setActiveTab] = useState("")

    const navigate = useNavigate()
    const { pathname } = useLocation()
    const theme = useTheme()

    useEffect(() => {
        setActiveTab(pathname.substring(1))
    }, [pathname])

    return (
        <Box component='nav'>
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isNonMobile ? 0 : "2px",
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width="100%" role="presentation">
                        <Box m="1.5rem 2rem 1rem 3rem">
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box display="flex" alignItems="center" gap="0.5rem">
                                    <Typography variant="h4" fontWeight="bold">
                                        ECOMVISION
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List>
                            {navItems.map(({ text, icon }) => {
                                if (!icon) {
                                    return (
                                        <Typography
                                            key={text}
                                            sx={{
                                                m: "1.5rem 0 1rem 3rem",
                                                color: theme.palette.secondary[500],
                                                fontSize: "0.85rem"
                                            }}
                                        >
                                            {text}
                                        </Typography>
                                    )
                                }

                                const routePath = text.toLowerCase()

                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${routePath}`)
                                                setActiveTab(routePath)
                                            }}
                                            sx={{
                                                backgroundColor: activeTab === routePath ? theme.palette.secondary[300] : "transparent",
                                                color: activeTab === routePath ? theme.palette.primary[600] : theme.palette.secondary[100]
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: "2rem",
                                                    color: activeTab === routePath ? theme.palette.primary[600] : theme.palette.secondary[200]
                                                }}
                                            >
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                            {activeTab === routePath && (
                                                <ChevronRightOutlined sx={{ ml: "auto" }} />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    )
}

export default Sidebar
