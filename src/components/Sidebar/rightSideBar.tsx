import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import ReportIcon from "@mui/icons-material/Report";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Avatar from "@mui/material/Avatar";
export default function RightSidebar() {
    const menu = [
        { name: "Dashboard", icon: <DashboardIcon /> },
        { name: "Payment", icon: <PaymentIcon /> },
        { name: "Report", icon: <ReportIcon /> },
        { name: "AccountBalanceIcon", icon: <AccountBalanceIcon /> },
    ];

    const profile = ["Friends", "profile", "Settings"];

    return (
        <div className="h-screen border-r border-gray-200 p-[10px] space-y-24 bg-[#edebf1]">
            <div className="flex flex-col items-center pt-8">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-between">
                        <div style={{ fontWeight: "600", fontSize: "14px" }}>
                            Recent Transfer
                        </div>
                        <div className="text-[8px]">See all</div>
                    </div>
                    <div className="flex items-center mt-[10px]">
                        <AddCircleOutlineIcon fontSize="large" />
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </div>
                </div>

                <div>
                    <div className="flex flex-col mt-[30px]">
                        <div className="flex justify-between">
                            <div style={{ fontWeight: "600", fontSize: "14px" }}>Jaka</div>
                            <div className="text-[8px]">VISA</div>




                        </div>

                        <div className="flex flex-col mt-[30px]">
                            <div className="flex justify-between">
                                <div style={{ fontWeight: "600", fontSize: "14px" }}>
                                    Upcoming Bills
                                </div>
                                <div className="text-[8px]">See all</div>
                            </div>
                            <div className="flex justify-between items-center mt-[10px]">
                                <div className="flex py-[12px] items-center">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <div>
                                        <div style={{ fontWeight: "600", fontSize: "14px" }}>
                                            Electric Bills
                                        </div>
                                        <div className="text-[12px]">Sucessfully </div>
                                    </div>
                                </div>
                                <div className="ml-[10px]">$99.0</div>
                            </div>
                            <div className="flex justify-between items-center mt-[10px]">
                                <div className="flex py-[12px] items-center">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <div>
                                        <div style={{ fontWeight: "600", fontSize: "14px" }}>
                                            internet Bills
                                        </div>
                                        <div className="text-[12px]">Sucessfully </div>
                                    </div>
                                </div>
                                <div className="ml-[10px]">$33.0</div>
                            </div>
                            <div className="flex justify-between items-center mt-[10px]">
                                <div className="flex py-[12px] items-center">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <div>
                                        <div style={{ fontWeight: "600", fontSize: "14px" }}>
                                            PDAM
                                        </div>
                                        <div className="text-[12px]">Sucessfully </div>
                                    </div>
                                </div>
                                <div className="ml-[10px]">$71.0</div>
                            </div>
                            <div className="flex justify-between items-center mt-[10px]">
                                <div className="flex py-[12px] items-center">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <div>
                                        <div style={{ fontWeight: "600", fontSize: "14px" }}>
                                            Television
                                        </div>
                                        <div className="text-[12px]">Sucessfully </div>
                                    </div>
                                </div>
                                <div className="ml-[10px]">$12.0</div>
                            </div>{" "}
                            <div className="flex justify-between items-center mt-[10px]">
                                <div className="flex py-[12px] items-center">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <div>
                                        <div style={{ fontWeight: "600", fontSize: "14px" }}>
                                            Video
                                        </div>
                                        <div className="text-[12px]">Sucessfully </div>
                                    </div>
                                </div>
                                <div className="ml-[10px]">$11.3.</div>
                            </div>
                            );
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
