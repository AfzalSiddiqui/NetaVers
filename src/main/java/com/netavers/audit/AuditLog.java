package com.netavers.audit;

import java.time.LocalDateTime;

public class AuditLog {
    private String action;
    private LocalDateTime timestamp;

    public AuditLog(String action) {
        this.action = action;
        this.timestamp = LocalDateTime.now();
    }
}
