const data = [
    {
        "name": "VS Code",
        "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png",
        "download": "25123515",
        "rating": 4.8,
        "description": "dfsjihmfxnlfsdhgx,adn;asdngffcsmnxhdfuadhgasduabgvb;ajbhgvauibv;buiabhvuBNDvubaubdssvasvtgvbcjsutyvbchgxvcyugvbv",
        "command": [
            "sudo apt-get update",
            "sudo apt-get install vs-code"
        ]
    },
    {
        "name": "Chrome",
        "src": "https://4.bp.blogspot.com/-SAlsUK_Hwkw/TYGj8pt-kbI/AAAAAAAAAqE/blsfUwJWdbU/s1600/Google%2BChrome%2Bicon%2Bnew.png",
        "download": "25123515",
        "rating": 4.8,
        "description": "dfsjihmfxnlfsdhgx,adn;asdngffcsmnxhdfuadhgasduabgvb;ajbhgvauibv;buiabhvuBNDvubaubdssvasvtgvbcjsutyvbchgxvcyugvbv",
        "command": [
            "sudo apt-get update",
            "sudo apt-get install vs-code"
        ]
    },
    {
        "name": "Figma",
        "src": "https://cdn.iconscout.com/icon/free/png-256/figma-1693589-1442630.png",
        "download": "25123515",
        "rating": 4.8,
        "description": "dfsjihmfxnlfsdhgx,adn;asdngffcsmnxhdfuadhgasduabgvb;ajbhgvauibv;buiabhvuBNDvubaubdssvasvtgvbcjsutyvbchgxvcyugvbv",
        "command": [
            "sudo apt-get update",
            "sudo apt-get install vs-code"
        ]
    },
    {
        "name": "VS Code",
        "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png",
        "download": "25123515",
        "rating": 4.8,
        "description": "dfsjihmfxnlfsdhgx,adn;asdngffcsmnxhdfuadhgasduabgvb;ajbhgvauibv;buiabhvuBNDvubaubdssvasvtgvbcjsutyvbchgxvcyugvbv",
        "command": [
            "sudo apt-get update",
            "sudo apt-get install vs-code"
        ]
    },
    {
        "name": "Chrome",
        "src": "https://4.bp.blogspot.com/-SAlsUK_Hwkw/TYGj8pt-kbI/AAAAAAAAAqE/blsfUwJWdbU/s1600/Google%2BChrome%2Bicon%2Bnew.png",
        "download": "25123515",
        "rating": 4.8,
        "description": "dfsjihmfxnlfsdhgx,adn;asdngffcsmnxhdfuadhgasduabgvb;ajbhgvauibv;buiabhvuBNDvubaubdssvasvtgvbcjsutyvbchgxvcyugvbv",
        "command": [
            "sudo apt-get update",
            "sudo apt-get install vs-code"
        ]
    },
    {
        "name": "Figma",
        "src": "https://cdn.iconscout.com/icon/free/png-256/figma-1693589-1442630.png",
        "download": "25123515",
        "rating": 4.8,
        "description": "dfsjihmfxnlfsdhgx,adn;asdngffcsmnxhdfuadhgasduabgvb;ajbhgvauibv;buiabhvuBNDvubaubdssvasvtgvbcjsutyvbchgxvcyugvbv",
        "command": [
            "sudo apt-get update",
            "sudo apt-get install vs-code"
        ]
    },
    {
        "name": "VS Code",
        "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png",
        "download": "25123515",
        "rating": 4.8,
        "description": "dfsjihmfxnlfsdhgx,adn;asdngffcsmnxhdfuadhgasduabgvb;ajbhgvauibv;buiabhvuBNDvubaubdssvasvtgvbcjsutyvbchgxvcyugvbv",
        "command": [
            "sudo apt-get update",
            "sudo apt-get install vs-code"
        ]
    },
    {
        "name": "Chrome",
        "src": "https://4.bp.blogspot.com/-SAlsUK_Hwkw/TYGj8pt-kbI/AAAAAAAAAqE/blsfUwJWdbU/s1600/Google%2BChrome%2Bicon%2Bnew.png",
        "download": "25123515",
        "rating": 4.8,
        "description": "dfsjihmfxnlfsdhgx,adn;asdngffcsmnxhdfuadhgasduabgvb;ajbhgvauibv;buiabhvuBNDvubaubdssvasvtgvbcjsutyvbchgxvcyugvbv",
        "command": [
            "sudo apt-get update",
            "sudo apt-get install vs-code"
        ]
    },
    {
        "name": "Figma",
        "src": "https://cdn.iconscout.com/icon/free/png-256/figma-1693589-1442630.png",
        "download": "25123515",
        "rating": 4.8,
        "description": "dfsjihmfxnlfsdhgx,adn;asdngffcsmnxhdfuadhgasduabgvb;ajbhgvauibv;buiabhvuBNDvubaubdssvasvtgvbcjsutyvbchgxvcyugvbv",
        "command": [
            "sudo apt-get update",
            "sudo apt-get install vs-code"
        ]
    }
]

export default function storeCreator(state = [], action) {
    switch (action.type) {
        case "fetch_data":
            return (
                state = data
            )
        default:
            return state
    }
}