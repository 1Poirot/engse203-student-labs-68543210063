function RequestCard({ request, onDeleteRequest }) {
  return (
    <article className="request-card">
      <div className="request-content">
        <div className="request-header">
          <strong>{request.id}</strong>
        </div>

        <h3>{request.requestType}</h3>

        <p>{request.location}</p>

        <p>{request.details}</p>

        <div className="request-meta">
          {/* ความเร่งด่วน */}
          <span
            className={
              request.priority === "urgent"
                ? "badge badge-urgent"
                : "badge badge-normal"
            }
          >
            {request.priority === "urgent"
              ? "🔴 เร่งด่วน"
              : "🔵 ปกติ"}
          </span>

          {/* สถานะ */}
          <span
            className={`badge ${
              request.status === "pending"
                ? "badge-pending"
                : request.status === "in-progress"
                  ? "badge-progress"
                  : "badge-completed"
            }`}
          >
            {request.status === "pending"
              ? "🟡 รอดำเนินการ"
              : request.status === "in-progress"
                ? "🔵 กำลังดำเนินการ"
                : "🟢 เสร็จสิ้น"}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onDeleteRequest(request.id)}
      >
        ลบ
      </button>
    </article>
  );
}

export default RequestCard;