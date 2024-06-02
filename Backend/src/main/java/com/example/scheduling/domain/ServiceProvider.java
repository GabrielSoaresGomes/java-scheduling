package com.example.scheduling.domain;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class ServiceProvider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "serviceProvider")
    private List<Appointment> appointments;

    public String generateScheduleReport() {
        StringBuilder report = new StringBuilder();
        for (Appointment appointment : appointments) {
            if (appointment.getDateTime().getDayOfWeek().getValue() < 6) { // Weekday
                if (appointment.getDateTime().getHour() < 12) {
                    report.append("Morning appointment on ");
                } else if (appointment.getDateTime().getHour() < 18) {
                    report.append("Afternoon appointment on ");
                } else {
                    report.append("Evening appointment on ");
                }
            } else { // Weekend
                report.append("Weekend appointment on ");
            }

            report.append(appointment.getDateTime().toLocalDate().toString());
            report.append(" with user ").append(appointment.getUser().getName());
            report.append(" for service ").append(appointment.getService().getName());
            report.append("\n");
        }
        return report.toString();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(List<Appointment> appointments) {
        this.appointments = appointments;
    }
}
