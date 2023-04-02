import { Box, Button } from "@mui/material"
// import Slider from "../components/Slider"
import { Link } from "react-router-dom"

const 背景 = [
    "",
    "",
    "AI",
    "夜幕",
    "神经网络",
    "晴天",
    "和谐共处",
    "绿色",
    "田园",
    "美好",
    "未来",
    "智慧",
    "都市",
    "乌托邦",
    "太空",
    "",
    ""
]

const 场景 = [
    "",
    "",
    "虚实融合",
    "身临其境",
    "科技又温馨",
    "自动驾驶",
    "虚实融合",
    "身临其境",
    "科技又温馨",
    "数字人服务",
    "容纳上万人",
    "人机和谐",
    "无人机座舱",
    "手术台",
    "智慧课堂",
    "养老院",
    "银行",
    "超级工厂",
    "空间站",
    "火星营地",
    "任意门",
    "农场",
    "",
    ""
]

const 动 = [
    "",
    "",
    "提高",
    "学习",
    "智能",
    "聊天",
    "提高",
    "学习",
    "智能",
    "医疗",
    "金融",
    "科技",
    "制造",
    "安防",
    "芯片",
    "生物",
    "5G",
    "数据科学",
    "交互",
    "决策",
    "",
    ""
]

const 角色 = [
    "",
    "",
    "男人",
    "女人",
    "男孩",
    "机器人",
    "男人",
    "女人",
    "男孩",
    "女孩",
    "超人",
    "双足机器人",
    "无人机",
    "无人船",
    "无人车",
    "四足机器人",
    "机械臂",
    "半机械人",
    "数字虚拟人",
    "太空人",
    "",
    ""
]

const 建筑 = [
    "",
    "",
    "太空电梯",
    "太空船坞",
    "水上堡垒",
    "水下楼阁",
    "碟形建筑",
    "太空电梯",
    "太空船坞",
    "水上堡垒",
    "水下楼阁",
    "碟形建筑",
    "",
    ""
]

const 风格 = [
    "",
    "",
    "赛博朋克",
    "梦境森林",
    "山谷王国",
    "天空之城",
    "星辰大海",
    "极光遍布",
    "彩虹桥",
    "机械城",
    "废土城市",
    "地下城",
    "反重力世界",
    "",
    ""
]

function Step3() {
    return (
        <Box className="w-full min-h-screen flex flex-col justify-center items-center relative">
            <img
                src="/logo.png"
                className="absolute top-10 m-auto left-0 right-0 z-10"
            />
            <img
                src="/bg3.png"
                className="absolute top-0 left-0 object-cover h-full w-full z-[-1]"
            />
            <Box className="flex flex-col gap-y-4 w-screen">
                {/* <Slider items={背景} />
                <Slider items={场景} />
                <Slider items={动} />
                <Slider items={角色} />
                <Slider items={建筑} />
                <Slider items={风格} /> */}
            </Box>
            <Link to="/step-4" className="mt-[30px]">
                <Button
                    variant="outlined"
                    sx={{
                        borderRadius: "20px",
                        color: "#FFFFFF",
                        marginTop: "12px",
                        minWidth: "auto",
                        paddingX: "72px",
                        paddingY: "10px",
                        fontSize: "15px",
                        background:
                            "linear-gradient(to right, #4871FF, #D036FF, #FFB543)"
                    }}
                >
                    生成AI作品
                </Button>
            </Link>
        </Box>
    )
}

export default Step3
