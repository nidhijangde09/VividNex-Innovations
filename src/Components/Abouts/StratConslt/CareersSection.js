import React from "react";
import "./CareersSection.css";
import { ArrowUpRight } from "lucide-react";
import StrategyConsulting from '../../Service/StrategyConsulting/StrategyConsulting';
import FinanceManagement from '../../Service/FinanceManagement/FinanceManagement';
import InfrastructureCapitalProjects from '../../Service/InfrastructureCapitalProjects/InfrastructureCapital';
import SupplyChain from '../../Service/SupplyChain/SupplyChain';
import SustainabilityConsulting from '../../Service/StrategyConsulting/StrategyConsulting';
import TalentOrganization from '../../Service/TalentOrganization/TalentOrganization';
import TechnologyTransformation from '../../Service/TechnologyTransformation/TechnologyTransformation';

const CareersSection = () => {
  return (
    <div>
      <div className="related-capabilities">
        <h2>Related capabilities</h2>
        <ul>
          <li>
            <a
              href="https://example.com/cities-transportation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={18} strokeWidth={2} />
              <span>Strategy</span>
            </a>
          </li>


          <li>
            <a
              href="/FinanceManagement"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={18} strokeWidth={2} />
              <span>Finance and Risk Management</span>
            </a>
          </li>

          <li>
            <a
              href="/FinanceManagement"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={18} strokeWidth={2} />
              <span>Infrastructure and Capital Projects</span>
            </a>
          </li>

          <li>
            <a
              href="https://example.com/utilities-netzero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={18} strokeWidth={2} />
              <span>Supply Chain</span>
            </a>
          </li>

          <li>
            <a
              href="https://example.com/utilities-netzero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={18} strokeWidth={2} />
              <span>Sustainability</span>
            </a>
          </li>

          <li>
            <a
              href="https://example.com/utilities-netzero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={18} strokeWidth={2} />
              <span>Talent and Organization</span>
            </a>
          </li>

          <li>
            <a
              href="https://example.com/utilities-netzero"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={18} strokeWidth={2} />
              <span>Technology Transformation</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CareersSection;

