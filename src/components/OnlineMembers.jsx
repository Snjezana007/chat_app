
function OnlineMembers
(
    { onlineMembers, currentMembers}
)
{
    const {id} = member;
    const { username, color } = member.clientData;
    const className = localUser ? "OnlineMember _current"  :  "OnlineMember";
    
    return (
        <li key={id}
        className={className}
        style={{ color: color, borderBottomColor: color,}} >
            {username}
        </li>
    );
};

return (
    <ul className="OnlineMembers">
        {onlineMembers.map((m) => renderMember(m))}
    </ul>
);

