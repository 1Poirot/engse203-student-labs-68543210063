function RequestCard({ request, onDeleteRequest }) {
  return (
    <div className="request-card">
  <div>
    <div className="request-id">{request.id}</div>

    <h3>{request.type}</h3>

    <p>{request.location}</p>

    <p>{request.detail}</p>

    <div className="request-meta">
      <span
        className={`badge ${
          request.urgent ? "badge-urgent" : "badge-normal"
        }`}
      >
        {request.urgent ? "เร่งด่วน" : "ปกติ"}
      </span>

      <span
        className={`badge ${
          request.status === "รอดำเนินการ"
            ? "badge-pending"
            : request.status === "กำลังดำเนินการ"
              ? "badge-progress"
              : "badge-completed"
        }`}
      >
        {request.status}
      </span>
    </div>
  </div>

  <button>ลบ</button>
</div>
  );
}

export default RequestCard;

