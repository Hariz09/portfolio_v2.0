import { StatusOption } from "@/types/status";

export const statusOptions: StatusOption[] = [
    {
      text: "Available for new projects",
      color: "bg-green-400",
      pulseColor: "group-hover/status:bg-green-300",
      icon: "mdi:rocket-launch",
      description: "Ready to launch your next idea"
    },
    {
      text: "Currently on holiday",
      color: "bg-amber-400",
      pulseColor: "group-hover/status:bg-amber-300",
      icon: "mdi:palm-tree",
      description: "Exploring new galaxies"
    },
    {
      text: "In deep work mode",
      color: "bg-purple-400",
      pulseColor: "group-hover/status:bg-purple-300",
      icon: "mdi:brain",
      description: "Crafting digital experiences"
    },
    {
      text: "Open to collaborations",
      color: "bg-blue-400",
      pulseColor: "group-hover/status:bg-blue-300",
      icon: "mdi:handshake",
      description: "Let's build something together"
    }
  ];