import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();
  const { t } = useLanguage();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      containerAriaLabel={t("Notifications", "Meldingen")}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
