export const showDetail = (data) => {
  switch (data.type) {
    case "text":
      return (
        <div>
          {data.content}{" "}
          {data?.link ? (
            <a href={data.link} target="_blank" rel="noreferrer">
              링크
            </a>
          ) : (
            ""
          )}
        </div>
      );
    case "hyperList":
      return (
        <ul className="Modal-action-ul">
          <div className="Modal-action-ul-name">{data.name}</div>
          {data.content.map((item, key) => {
            return (
              <li key={key}>
                ▷ {key + 1}.
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.plain}
                </a>
                <span className="Modal-detail-item-etc">{item.etc}</span>
              </li>
            );
          })}
        </ul>
      );
    default:
      return null;
  }
};
