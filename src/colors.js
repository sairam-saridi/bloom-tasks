export default function Colors()
{
    const colors = [
        "#F8D7E3",
        "#E8DDF8",
        "#FCE2CF",
        "#DCEFE2",
        "#F8EEC8",
        "#DCEAF8",
        "#F4C2C2",
        "#F7C6B8",
        "#FFE0CC",
        "#DCC6F2",
        "#CDE7F5",
        "#CDEFEA",
        "#CFE3D4",
        "#E1EDC5",
        "#FFF0B8",
        "#FFF1DC",
        "#E8C8D8",
        "#D5DDF8",
        "#EBCAD0",
        "#D3EEE5",
        "#E5D5F5",
        "#F8EACB"
    ];

    return colors[Math.floor(Math.random()*colors.length)];
}