function ListItem({ role, company, type, period, location, description }) {
  return (
    <li className="mb-6">
      {/* Role */}
      <h3 className="font-semibold text-lg">{role}</h3>

      {/* Company + Type */}
      <p className="text-sm text-gray-800">
        {company} - {type}
      </p>

      {/* Period */}
      <p className="text-sm text-gray-400">{period}</p>

      {/* Location */}
      <p className="text-sm text-gray-400">{location}</p>

      {/* Description */}
      <p className="text-sm text-gray-700 mt-1">{description}</p>
    </li>
  );
}

export default function List({ items = [] }) {
  return (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </ul>
  );
}
