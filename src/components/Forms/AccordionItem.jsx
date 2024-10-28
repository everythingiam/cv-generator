import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from 'react';
import '../../styles/Accordion.scss';

const AccordionItem = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<li>
			<header onClick={toggleAccordion}>
				<h3>{title}</h3>
				{isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
			</header>
			<div className={`content ${isOpen ? 'open' : ''}`}>
				{children}
			</div>
		</li>
	);
};

export default AccordionItem;
