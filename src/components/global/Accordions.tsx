import clsx from "clsx";
import { Fragment, useState } from "react";
import { Optional } from "utility-types";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { AccordionProps } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface AccordionsProps extends Optional<AccordionProps, "children"> {
    accordions: { title: React.ReactNode; details: React.ReactNode }[];
    theme?: "primary" | "secondary";
}

const Accordions = ({
    accordions,
    className,
    theme = "primary",
    ...props
}: AccordionsProps) => {
    const [expanded, setExpanded] = useState<string | false>("panel0");

    return (
        <Fragment>
            {accordions.map(({ title, details }, i) => (
                <MuiAccordion
                    key={i}
                    expanded={expanded === "panel" + i}
                    onChange={(_, newExpanded) =>
                        setExpanded(newExpanded ? "panel" + i : false)
                    }
                    className={clsx(`accordion accordion-${theme}`, className)}
                    {...props}
                >
                    <MuiAccordionSummary
                        aria-controls={`panel${i}d-content`}
                        id={`panel${i}d-header`}
                    >
                        <div className="accordion-icon mie-6">
                            {expanded === "panel" + i ? (
                                <RemoveIcon />
                            ) : (
                                <AddIcon />
                            )}
                        </div>
                        {title}
                    </MuiAccordionSummary>
                    <MuiAccordionDetails>{details}</MuiAccordionDetails>
                </MuiAccordion>
            ))}
        </Fragment>
    );
};

export default Accordions;
