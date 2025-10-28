
/**
 * Service de gestion des signalements utilisateurs
 */

import { UserReport } from './linkAuditService';

class UserReportService {
  private reports: Map<string, UserReport[]> = new Map();

  /**
   * Soumet un nouveau signalement
   */
  submitReport(report: Omit<UserReport, 'id' | 'reportedAt' | 'status'>): string {
    const newReport: UserReport = {
      ...report,
      id: this.generateId(),
      reportedAt: new Date(),
      status: 'pending'
    };

    const existingReports = this.reports.get(report.resourceId) || [];
    existingReports.push(newReport);
    this.reports.set(report.resourceId, existingReports);

    // Sauvegarde dans localStorage pour persistance
    this.saveToStorage();

    return newReport.id;
  }

  /**
   * Récupère les signalements pour une ressource
   */
  getReportsForResource(resourceId: string): UserReport[] {
    return this.reports.get(resourceId) || [];
  }

  /**
   * Met à jour le statut d'un signalement
   */
  updateReportStatus(reportId: string, status: UserReport['status']): boolean {
    for (const [resourceId, reports] of this.reports.entries()) {
      const report = reports.find(r => r.id === reportId);
      if (report) {
        report.status = status;
        this.saveToStorage();
        return true;
      }
    }
    return false;
  }

  /**
   * Charge les signalements depuis le localStorage
   */
  loadFromStorage(): void {
    try {
      const stored = localStorage.getItem('ia-explorer-user-reports');
      if (stored) {
        const data = JSON.parse(stored);
        this.reports = new Map(Object.entries(data).map(([key, value]) => [
          key,
          (value as any[]).map(report => ({
            ...report,
            reportedAt: new Date(report.reportedAt)
          }))
        ]));
      }
    } catch (error) {
      console.error('Erreur lors du chargement des signalements:', error);
    }
  }

  /**
   * Sauvegarde les signalements dans le localStorage
   */
  private saveToStorage(): void {
    try {
      const data = Object.fromEntries(this.reports.entries());
      localStorage.setItem('ia-explorer-user-reports', JSON.stringify(data));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des signalements:', error);
    }
  }

  /**
   * Génère un ID unique pour les signalements
   */
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

export const userReportService = new UserReportService();

// Charge les signalements au démarrage
userReportService.loadFromStorage();
